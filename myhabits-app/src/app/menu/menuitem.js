import Link from "next/link";

export default function MenuItem(props) {
  return (
    <Link href={`${props.href}`} className="">
      <p className="min-w-[53px] text-5xl font-extrabold border-solid border-2 border-l-transparent border-t-transparent border-b-transparent pr-4 mr-4">
        {props.index}
      </p>
      <div className="text-left w-full mr-6">
        <h3 className="pl-2 uppercase font-bold bg-gradient-to-r from-10% via-20% to-80% from-yellow-700 via-yellow-700 to-transparent w-full grow">
          {props.title}
        </h3>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}
