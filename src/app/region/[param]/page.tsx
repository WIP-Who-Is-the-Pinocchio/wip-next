'use client';

import { usePathname } from 'next/navigation';

const RegionPage = () => {
  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname);
  console.log(decodedPathname.split('/')[2]);

  return (
    <div>
      <h2>Region: {decodedPathname.split('/')[2]}</h2>
    </div>
  );
};

export default RegionPage;
