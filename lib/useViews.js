import { useEffect, useState } from 'react';

export default function useViews() {
  const [views, setViews] = useState(null);
  const [db, setDb] = useState(null);
  const [postID, setPostID] = useState(null);

  useEffect(() => {
    const loadViews = () => {
      if (db == null) {
        const _postID = getPostId();
        console.log('postId', _postID);
        import('./firebase')
          .then(({ default: _db }) => {
            const db = _db.database();
            setDb(db);
            setPostID(_postID);
            db.ref().child(_postID).on('value', onViews);
          })
          .catch((err) => console.error(err));

        // Fetch the views
        if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'preview') {
          fetch(`/api/view?id=${encodeURIComponent(_postID)}`)
            .then((res) => res.json())
            .then(({ total, error }) => {
              if (error) {
                console.error('View save error:', error);
              } else {
                console.info('View saved. Total views:', total);
              }
            })
            .catch((err) => {
              console.error('View store error', err);
            });
        }
      }
    };

    loadViews();

    const cleanLoadViews = () => {
      if (db) {
        db.ref().child(postID).off('value', onViews);
      }
    };

    return cleanLoadViews();
  }, []);

  const getPostId = () => {
    return window.location.pathname.substr(1).replace(/(\d+)\//, '$1-');
  };

  const onViews = (views) => {
    setViews(views.val());
  };

  return {
    db,
    views,
    postID,
  };
}
