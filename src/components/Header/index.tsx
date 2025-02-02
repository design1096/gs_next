import React from 'react'
import styles from "./style.module.scss";
import Link from "next/link";
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href={"/login"}>
            ログイン
          </Link>
          <AccessibilityIcon />
        </li>
        <li>
          <Link href={"/signup"}>登録</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;