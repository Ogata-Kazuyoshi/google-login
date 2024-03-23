# FirebaseでのGoogleログイン

<details open="open">
<summary>目次</summary>



- [Firebaseでの認証登録](#Firebaseでの認証登録)
- [コード例](#コード例)
- [番外：Githubでのログイン](番外：Githubでのログイン)

- [参考](#参考)

</details>

# Firebaseでの認証登録

<details>
<summary> 1. 使ってみるを押下</summary>

![開始ページ](./assets/images/firebase-console1.png)

</details>

<details>
<summary> 2. 「プロジェクトを追加」を押下</summary>

![プロジェクトを追加](./assets/images/firebase-console2.png)

</details>

<details>
<summary> 3. アナリティクスの要否をチェック（使わないなら不要）</summary>

![アナリティクスの要否](./assets/images/firebase-console3.png)

</details>

<details>
<summary> 4. Webボタン(<>)を押下してアプリを登録</summary>

![Webボタンを押下](./assets/images/firebase-console4.png)

</details>

<details>
<summary> 5. 下記のSDKについてはあとでコンソールで確認可能</summary>

![SDK](./assets/images/firebase-console5.png)

</details>

<details>
<summary> 6. コンソール内でAuthentificationをクリック</summary>

![Authentification](./assets/images/firebase-console6.png)

</details>

<details>
<summary> 7. 始めるボタンを押下</summary>

![Authentification-start](./assets/images/firebase-console7.png)

</details>

<details>
<summary> 8. お好みのプロバイダーを選定</summary>

![プロバイダー選定](./assets/images/firebase-console8.png)

</details>

<details>
<summary> 9. トグルボタンを押下して有効化</summary>

![Toggle](./assets/images/firebase-console9.png)

</details>

<details>
<summary> 10. 下記の画面でステータスが有効になっていたらOK</summary>

![confirm](./assets/images/firebase-console10.png)

</details>


# コード例

1. firebaseをインストール
```zh
npm install firebase 
```

2. firebase.tsで初期化を実施

```ts
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}
```

3. LoginページでSignInWithPopUpを呼び出す

```tsx
export const Login = () => {
    const handleLogin = () => {
        signInWithPopup(auth, provider).catch((error) => {alert(error)});
    }
    return <><button onClick={handleLogin}>ログインする</button></>
}
```

4. App.tsxでログイン状態の監視(onAuthStateChanged)をする

```tsx
const navigate = useNavigate()
useEffect(() => {
    auth.onAuthStateChanged(loginUser => {
        console.log(loginUser)
        if (loginUser) {
            navigate('/personal')
        } else {
            navigate('login')
        }
    })
}, []);

```

5. ログアウト時はsignoutメソッドを呼び出す

```tsx
export const PersonalPage = () => {
    const handleLogout = () => {
        signOut(auth)
    }
    return <>
        <div>PersonalPageです</div>
        <button onClick={handleLogout}>ログアウトする</button>
    </>
}
```

# 番外：Githubでのログイン

1. GithubでAppの登録
- Githubのいつものページへ移動
- setting -> Developper settings -> OAuthApps -> new Auth Apps
- AppのURLは適当に、コールバックURLはfirebase側のプロバイダ選んだ際に出てくるやつ

2. firebaseでプロバイダ登録
- 上記のクライアントID、シークレットIDを入れて保存したら有効化される

3. コード例はfirebase.tsとLogin.tsx参照のこと

# 参考
- [Firebaseログイン画面](https://firebase.google.com/?hl=ja)
- [Firebaseドキュメント](https://firebase.google.com/docs/auth?hl=ja)
- [ロゴガイドライン24年3月現在](https://developers.google.com/identity/branding-guidelines?fbclid=IwAR0oyedruG1mHbETsSGIh-w1cIUU7ya4y2BTXVvR1fezUuR6nAHz_H3yL2s&hl=ja)

