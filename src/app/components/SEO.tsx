import Head from 'next/head';

interface SEOPropsType {
  title: string;
}

const SEO: React.FC<SEOPropsType> = ({ title }) => {
  return (
    <Head>
      <title>WIP | {title}</title>
      <meta
        name="description"
        content="22대 총선이 얼마 남지 않았습니다! 대한민국 국회의원 공약이행률 순위를 확인해보세요. 21대 국회의원 공약이행률 정보를 제공합니다."
      />
      <meta
        name="keyword"
        content="국회의원,공약이행률,21대,22대,선거,총선,후보"
      />
      {/* 웹페이지,콘텐츠 타입  */}
      <meta property="og:type" content="website" />
      {/* 콘텐츠 제목  */}
      <meta property="og:title" content="WIP - 국회의원 공약이행률 순위" />
      {/* 콘텐츠 설명  */}
      <meta
        property="og:description"
        content="풋살장 찾기, 풋살 팀 모집, 풋살 이야기 등 풋살의 모든 것을 즐길 수 있는 곳. 내 주변 풋살 커뮤니티를 싸커퀵에서 직접 만들어보세요."
      />
      {/* 미리보기 이미지  */}
      {/* <meta
        property="og:image"
        content="준비중"
      /> */}
      {/* 웹 페이지 URL  */}
      {/* <meta property="og:url" content="http://준비중/" /> */}
    </Head>
  );
};

export default SEO;
