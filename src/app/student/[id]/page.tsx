import StudentCard from "@/components/StudentCard";
import connectDB from "@/lib/mongodb";
import StudentModel from "@/models/Student";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Student {
  _id: string;
  name: string;
  email: string;
  domain: string;
  duration: string;
  company: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

async function getStudent(id: string): Promise<Student | null> {
  try {
    await connectDB();
    const student = await StudentModel.findById(id);

    if (!student) {
      return null;
    }

    return {
      _id: student._id.toString(),
      name: student.name,
      email: student.email,
      domain: student.domain,
      duration: student.duration,
      company: student.company,
    };
  } catch (error) {
    console.error("Error fetching student:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const student = await getStudent(id);

  if (!student) {
    return {
      title: "Student Not Found | JankiInfotech",
      description: "The requested student information could not be found.",
    };
  }

  return {
    title: `${student.name} - ${student.domain} | JankiInfotech`,
    description: `Internship certificate for ${student.name} in ${student.domain} at JankiInfotech`,
    robots: "noindex, nofollow", // Keep student pages private
  };
}

export default async function StudentPage({ params }: PageProps) {
  const { id } = await params;
  const student = await getStudent(id);

  if (!student) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <StudentCard student={student} />
      </div>
    </div>
  );
}
