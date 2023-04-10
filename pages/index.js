
import Link from "next/link";

const index = () => {
  return (
    <>
      <ul>
        <li>
          <Link href='/navbar' className="">
            navbar
          </Link>
        </li>

        <li>
        <Link href='/contact'>
          contact
        </Link>
      </li>
      <li>
        <Link href='/gallery'>
          gallery
        </Link>
      </li>

        
      </ul>
    </>
  );
};

export default index;
