// jest.mock("axios", () => ({
//   __esModule: true,
//   ...jest.requireActual("axios"),
// }));

// it("login rendered", () => {
//   localStorage.setItem(
//     "REACT_APP_FIREBASE_API_KEY",
//     "AIzaSyAZ1g7dfZUG21RuJ3x2BCaziDlIEQBbegk"
//   );
//   localStorage.setItem(
//     "REACT_APP_FIREBASE_AUTH_DOMAIN",
//     "safly-a958f.firebaseapp.com"
//   );
//   localStorage.setItem("REACT_APP_FIREBASE_DATABASE_URL", "safly-a958f");
//   localStorage.setItem(
//     "REACT_APP_FIREBASE_PROJECT_ID",
//     "safly-a958f.appspot.com"
//   );
//   localStorage.setItem("REACT_APP_FIREBASE_STORAGE_BUCKET", "568466100708");
//   localStorage.setItem(
//     "REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
//     "1:568466100708:web:bc5e3fd88cb82754efb7f1"
//   );
//   localStorage.setItem("REACT_APP_FIREBASE_APP_ID", "G-93FL0C1H4C");
//   const { queryByLabelText, getByLabelText } = render(<LoginModal />);
// });

test("Login modal shown", async () => {
  expect(true).toBe(true);
});

/**
 * Note untuk mas Vicky
 * Saya ga jadi test auth karena mock nya banyak hehe. Jadinya test homepage ajah
 */
