import db from '../../lib/firebase';

export default async function view(req, res) {
  if (!req.query.id) {
    return res.status(400).json({
      error: 'Missing id query parameter',
    });
  }

  const ref = db.database().ref().child(req.query.id);
  const { snapshot } = await ref.transaction((currentView) => {
    if (currentView === null) currentView = 0;

    return currentView + 1;
  });

  res.status(200).json({
    total: snapshot.val(),
  });
}
