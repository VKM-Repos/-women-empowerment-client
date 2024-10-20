
export const metadata = {
  title: "events page",
  description: "",
};

export default function EventsLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-transparent overflow-x-hidden">
      {props.children}
    </div>
  );
}
