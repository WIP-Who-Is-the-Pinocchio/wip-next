import Head from 'next/head';

interface SEOPropsType {
  title: string;
}

const SEO: React.FC<SEOPropsType> = ({ title }) => {
  return (
    <Head>
      <title>K피노키오 - 누가 공약을 지키지 않는가 | {title}</title>
      <meta
        name="description"
        content="제22대 총선에 재출마하는 21대 국회의원들의 공약 이행률 순위와 결과"
      />
      <meta
        name="keyword"
        content=" k피노키오, 공약, 총선, 선거, 22대, 21대, 순위, 국회의원"
      />
      {/* 웹페이지,콘텐츠 타입  */}
      <meta property="og:type" content="website" />
      {/* 콘텐츠 제목  */}
      <meta
        property="og:title"
        content="K피노키오 - 누가 공약을 지키지 않는가"
      />
      {/* 콘텐츠 설명  */}
      <meta
        property="og:description"
        content="제22대 총선에 재출마하는 21대 국회의원들의 공약 이행률 순위와 결과"
      />
      {/* 미리보기 이미지  */}
      <meta property="og:image" content="https://i.ibb.co/ys3YdhX/WIP.png" />
      {/* 웹 페이지 URL  */}
      <meta property="og:url" content="https://k-pinocchio.co.kr/" />
    </Head>
  );
};

export default SEO;
