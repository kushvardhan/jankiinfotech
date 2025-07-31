import { Card, CardContent } from '@/components/ui/card'
import { Brain, Code, Globe } from 'lucide-react'

const features = [
  { title: 'AI + Tech', icon: Brain, desc: 'Smart solutions for local problems' },
  { title: 'Development', icon: Code, desc: 'Custom apps and software' },
  { title: 'Culture & Web', icon: Globe, desc: 'Showcasing Mithila on the web' },
]

export default function Features() {
  return (
    <section className="grid gap-6 md:grid-cols-3 px-6 py-12 bg-gray-50">
      {features.map(({ title, icon: Icon, desc }) => (
        <Card key={title} className="p-6 text-center">
          <Icon className="mx-auto mb-4 text-primary" size={40} />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{desc}</p>
        </Card>
      ))}
    </section>
  )
}
