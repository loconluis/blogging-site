import Avatar from './Avatar';
import Social from './Social';
import { formatNumberWithCommas } from '../../lib/formatCommasNumber';
import { parseISO, format } from 'date-fns';

export default function Info({ frontMatter, views }) {
  return (
    <div className="blog-header">
      <h1 className="blog-title">{frontMatter.title}</h1>
      <div className="blog-info">
        <div className="blog-info-data">
          <Avatar size={'small'} />
          <p className="blog-info-data-author">{frontMatter.author}</p>
          <p className="blog-info-data-date">
            {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
          </p>
          <Social info />
          <p className={`blog-info-data-views ${!views ? 'views-loading' : ''}`}>
            {formatNumberWithCommas(views)} views
          </p>
        </div>
        <p className="blog-info-time">{frontMatter.readingTime.text}</p>
      </div>
    </div>
  );
}
