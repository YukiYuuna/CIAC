import HomePage from "@/pages/homePage";
import { LanguageProv } from "@/contexts/LanguageContext";

export default function Home() {

  return (
      <div className={"app-container"}>
          <LanguageProv>
              <HomePage/>
          </LanguageProv>
      </div>
  )
}
