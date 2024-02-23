

export const metadata = {
  title: "Discussions page",
  description: "",
};


export default function DiscussionsLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="w-full bg-transparent overflow-x-hidden">
      <div className="w-screen">
        {props.children}
      </div>
      {props.modal}
    </div>
  );
}
