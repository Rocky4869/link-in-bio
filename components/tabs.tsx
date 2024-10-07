import "bootstrap-icons/font/bootstrap-icons.css";

const Tabs = () => {
  return (
    <ul className="flex flex-col mt-6 items-center gap-4">
      <li className="w-64 sm:w-96 icon">
        <a
          href="https://rocky4869.github.io/myWeb/"
          className="flex justify-center p-3"
        >
          <i className="bi bi-house-fill mr-4"></i>
          Official Website
        </a>
      </li>
      <li className="w-64 sm:w-96 icon">
        <a href="https://wa.me/56880866" className="flex justify-center p-3">
          <i className="bi bi-whatsapp mr-4 whatsapp"></i> Whatsapp
        </a>
      </li>
      <li className="w-64 sm:w-96 icon">
        <a
          href="https://www.messenger.com/t/784289704/"
          className="flex justify-center p-3"
        >
          <i className="bi bi-messenger mr-4 messenger"></i> Messenger
        </a>
      </li>
      <li className="w-64 sm:w-96 icon">
        <a href="https://t.me/Rockylolo" className="flex justify-center p-3">
          <i className="bi bi-telegram mr-4" style={{ color: "#0088cc" }}></i>
          Telegram
        </a>
      </li>
      <li className="w-64 sm:w-96 icon">
        <a
          href="https://github.com/Rocky4869"
          className="flex justify-center p-3"
        >
          <i className="bi bi-github mr-4" style={{ color: "black" }}></i>{" "}
          GitHub
        </a>
      </li>
    </ul>
  );
};

export default Tabs;
