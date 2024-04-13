/* eslint-disable @typescript-eslint/no-explicit-any */
export const Main = ({ theme, texts, auth }: any) => {
  return (
    <main className={theme}>
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
      <p>{texts.mainContent}</p>
    </main>
  );
};
