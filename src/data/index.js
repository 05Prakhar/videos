import BookList from './BookList.json';
import YTChannels from './YoutubeChannels.json';

const Books = BookList.sort((bk) => bk.title);
const YouTube = YTChannels.sort((yt) => yt.title);

export {
  Books,
  YouTube,
}
