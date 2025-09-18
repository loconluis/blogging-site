import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicWorkExperiencePage = dynamic(() => import("@/components/VerticalTimeline"), {
  loading: () => (
    <div className="h-screen w-full bg-white dark:bg-neutral-950 flex justify-center items-center">
      <p className="text-neutral-900 dark:text-neutral-50">Loading work experience...</p>
    </div>
  ),
});

export default function workExperience() {
  return (
    <>
      <Head>
        <title>Work Experience - Luis Locon</title>
        <meta name="description" content="Professional work experience and career journey of Luis Locon" />
      </Head>
      <DynamicWorkExperiencePage />
    </>
  );
}