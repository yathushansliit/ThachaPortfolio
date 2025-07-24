import Card from './Card'

const subjects: Record<string, {
  semester1: { title: string; url: string }[]
  semester2: { title: string; url: string }[]
}> = {
  'Level 3': {
    semester1: [
      { title: 'Bio Mechanic', url: 'https://drive.google.com/drive/folders/1-S74NoEG_0-NY5R3vY87Gs4h3qTrUMSr' },
      { title: 'AIT', url: 'https://drive.google.com/drive/folders/1-fAxaXX_nDymdq6IApWa8HV-25D3iX1i' },
      { title: 'Anatomy', url: 'https://drive.google.com/drive/folders/1-kOpDl8R_61trxDQlT4Pm_714yZWpFeK' },
      { title: 'Aesthetic', url: 'https://drive.google.com/drive/folders/1-nM2_00nTZyqkLByuMFIw_57bV73U4nb' },
      { title: 'Teaching as a Profession', url: 'https://drive.google.com/drive/folders/1-qqbaoq3RXtElJhQhQjBidiCi0oMuVcK' },
      { title: '21st Century Education', url: 'https://drive.google.com/drive/folders/1-v08iOK1ebAUbp8Y50CezYxXicxhte6V' },
      { title: 'General Health', url: 'https://drive.google.com/drive/folders/1-xnLLrisGiGzX4uZXZpDKmHVGc7P5jnL' },
      { title: 'Approaches to Learning and Teaching', url: 'https://drive.google.com/file/d/1-wipauZcuyDazvvqOr4sgbW200-L9e_v/edit' },
    ],
    semester2: [
      { title: 'Bio Mechanic 1', url: 'https://drive.google.com/link9' },
      { title: 'Bio Mechanic 2', url: 'https://drive.google.com/link10' },
      { title: 'Bio Mechanic 3', url: 'https://drive.google.com/link11' },
    ],
  },
  'Level 4': {
    semester1: [
      { title: 'Bio Mechanic 1', url: 'https://drive.google.com/link12' },
      { title: 'Bio Mechanic 2', url: 'https://drive.google.com/link13' },
      { title: 'Bio Mechanic 3', url: 'https://drive.google.com/link14' },
    ],
    semester2: [
      { title: 'Bio Mechanic 1', url: 'https://drive.google.com/link15' },
      { title: 'Bio Mechanic 2', url: 'https://drive.google.com/link16' },
      { title: 'Bio Mechanic 3', url: 'https://drive.google.com/link17' },
    ],
  },
  // Add Level 1, 2 as needed
}

export default function LevelContent({ level }: { level: string }) {
  const data = subjects[level]
  if (!data) return <p className="mt-10 text-center">No content for this level.</p>

  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-4">{level}</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 ml-6">Semester 1</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-24">
          {data.semester1.map((subject, idx) => (
            <Card key={idx} title={subject.title} url={subject.url} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 ml-6">Semester 2</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-24">
          {data.semester2.map((subject, idx) => (
            <Card key={idx} title={subject.title} url={subject.url} />
          ))}
        </div>
      </div>
    </div>
  )
}