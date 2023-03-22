import urlFor from '@/lib/urlFor';
import Image from 'next/image';

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#0c5528] mb-10" />
      <div>
        {posts.map((post) => (
          <div key={post._id} className="group">
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
            </div>
            <h1>{post.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
