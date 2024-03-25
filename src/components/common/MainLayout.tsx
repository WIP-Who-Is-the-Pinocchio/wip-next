'use client';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-full max-w-[450px] flex-col items-center pt-[30px]">
      <div className="px-[20px] text-[16px] font-bold leading-[150%] text-black">
        WIP
      </div>
      <article className="mb-[40px] mt-[10px] px-[20px]">
        <p className="text-[14px] font-normal not-italic leading-[150%] text-black">
          누가 피노키오인가?
        </p>
      </article>
      <article
        style={{
          boxShadow: '0px 0px 16px 0px #E6E6E6',
          minHeight: 'calc(100vh - 138px)',
        }}
        className="mt-[11px] flex w-full flex-col items-center gap-[20px] rounded-t-[36px] px-[20px] pt-[24px]"
      >
        {children}
      </article>
    </section>
  );
}
