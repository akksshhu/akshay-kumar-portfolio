import ProfileCard from "./ProfileCard";

export default function LeftProfile() {
  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40
        hidden 2xl:block ">
      <ProfileCard/>
    </aside>
  );
}
