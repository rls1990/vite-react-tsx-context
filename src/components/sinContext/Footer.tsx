/* eslint-disable @typescript-eslint/no-explicit-any */
export const Footer = ({ theme, texts }: any) => {
  return (
    <footer className={theme}>
      <h4>{texts.footerTitle}</h4>
    </footer>
  );
};
