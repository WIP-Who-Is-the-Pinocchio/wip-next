import { useRouter } from 'next/router';

('use client');
const RegionPage = () => {
  const router = useRouter();
  const { param } = router.query;
  console.log(param);

  return (
    <div>
      <h2>Region: {param}</h2>
    </div>
  );
};

export default RegionPage;

// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json())

//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }
