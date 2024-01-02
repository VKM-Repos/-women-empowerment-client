

export const metadata = {
  title: "events page",
  description: "",
};

export default function EventsLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="w-full bg-transparent">
      {props.children}
      {props.modal}
    </div>
  );
}
