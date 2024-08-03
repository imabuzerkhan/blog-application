import Image from "next/image";
import styles from "./page.module.css";
import Features from "@/components/Feature/Features";
import Categorylist from "@/components/Categorylist/Categorylist";
import Cardlist from "@/components/card list/Cardlist";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
   <>
   <div className={styles.container}  >
<Features/>
<Categorylist/>
<div className={styles.content}  >
<Cardlist/>
<Menu/>
</div>
   </div>
   
   
   </>
  );
}
