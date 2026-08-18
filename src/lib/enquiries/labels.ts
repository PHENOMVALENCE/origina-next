import { enquirySubjectOptions } from "@/lib/content/contact";

export function enquirySubjectLabel(subject: string): string {
  return enquirySubjectOptions[subject as keyof typeof enquirySubjectOptions] ?? subject.replaceAll("_", " ");
}
