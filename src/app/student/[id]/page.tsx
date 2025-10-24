import StudentCard from "@/components/StudentCard";
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

// Frontend-only: Mock student data
// In production, this would be replaced with actual data from a backend or CMS
const mockStudents: Record<string, Student> = {
  "demo-001": {
    _id: "demo-001",
    name: "Demo Student",
    email: "student@example.com",
    domain: "Web Development",
    duration: "6 Months",
    company: "JankiInfotech",
  },
};

async function getStudent(id: string): Promise<Student | null> {
  try {
    // Return mock student data
    return mockStudents[id] || null;
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
