import './AboutUs.scss'
import config from '../config.json'
import { FaPlus } from 'react-icons/fa';

const Content = () => {
  const clickHandler = () => {
    if (config.form_url) {
      window.location.href = config.form_url
    }
  }


  return (
    <div className="about-us">
      <div className="container">
        <p>
          にゃっぷはねこちゃんの情報をなんでもマッピングできるサービスです。
        </p>
      </div>
    </div>
  );
};

export default Content;
