import HomePage from "@/pages/homePage";
import {LanguageCtx} from "@/contexts/LanguageContext";

export default function Home() {

  return (
      <div className={"app-container"}>
          <LanguageCtx>
              <HomePage/>
          </LanguageCtx>
      </div>
  )
}
