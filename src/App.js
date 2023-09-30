import TestCOntainer from "./components/TestCOntainer";
import TestHeading from "./components/TestHeading";
import TestImageList from "./components/TestImageList";
import TestPostCard from "./components/TestPostCard";
import TestBusinessInfoPaper from "./components/TestBusinessInfoPaper";
import {business} from './data/business';
import { posts} from "./data/post";

function App() {
  return (
    <>
      <TestHeading businessName={business.name} />
      <TestBusinessInfoPaper business={business} />
      <TestImageList images={business.images} />
      {posts.map(post => (
        <TestPostCard key={post.id} post={post} />
      ))}
    </>
  );
}

export default App;
