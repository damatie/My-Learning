import '../public/assets/styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppWrapper } from '../context/globalState'
import reducer, { initialState } from '../context/globalReducer'

function MyApp({ Component, pageProps }) {
  return  (
    <AppWrapper initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
