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
      { title: 'PLT', url: 'https://drive.google.com/drive/folders/102InMn22cn47U9g4GQ8rfCo7pTe94M54' },
      { title: 'Inclusive Education', url: 'https://drive.google.com/drive/folders/102pQ130Cs6_-AGBZU3-9Ggcrei_fF5FA' },
      { title: 'Performance Assessment', url: 'https://drive.google.com/drive/folders/10H6loJasOnWzEtGg1GbrVD50QN7Stng7' },
      { title: 'Nutrition for Health & Physical Activity', url: 'https://drive.google.com/drive/folders/10Jl0bK5kuZfwFARJASiVq75jDnwgZJth' },
      { title: 'GTT', url: 'https://drive.google.com/drive/folders/10MBk6TiBAxAGlFtn6p0NVWhBd8swB45W' }
    ],
  },
  'Level 4': {
    semester1: [
      { title: 'DTLT', url: 'https://drive.google.com/drive/folders/10MxHuFvdxDDY6ffYVuunF7cNQ7XpVuhd' },
      { title: 'Teaching Practice', url: 'https://drive.google.com/drive/folders/10P8K1Mh5wSWET8XMHMdxqkIt_YOco6zt' },
      { title: 'Sports Psychology & Sociology', url: 'https://drive.google.com/drive/folders/10Q2jEhD2Nba9GwoMXa0VgcQAcg6-G8Fk' },
      { title: 'Athletic II', url: 'https://drive.google.com/drive/folders/10TwtUgUcKTAGrYk-jcHd-gqd7LXqLkEt' },
      { title: 'Games 1', url: 'https://drive.google.com/drive/folders/10_hI_8ERgKLwwRJ29umNA2LG4xAseStZ' },
      { title: 'Lead to Learn', url: 'https://drive.google.com/drive/folders/10fNlupzL3T59Phto38aER_aGMGJLm9z6' },
      { title: 'Research Methods in Education', url: 'https://drive.google.com/drive/folders/10he2hYyG4I9nITWyMV5SBIFss01WJxmV' },
    ],
    semester2: [
      { title: 'Curriculum Reforms', url: 'https://drive.google.com/drive/folders/10hzXH-7jORjs13OFjWTt5yqk0Rvy7Tok' },
      { title: 'Control & Prevents Disease', url: 'https://drive.google.com/drive/folders/1-C8-nXQpBDPK7SvEdHyYMzusb7vzBrRl' },
      { title: 'Games 2', url: 'https://drive.google.com/drive/folders/10hz_fqSZ39TBNEdlsX70nvo9nDPHwImA' },
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
        <h3 className="text-lg font-semibold mb-2 ml-6 md:ml-3">Semester 1</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-20 lg:ml-20 md:ml-9">
          {data.semester1.map((subject, idx) => (
            <Card key={idx} title={subject.title} url={subject.url} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 ml-6 md:ml-3">Semester 2</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-20 lg:ml-20 md:ml-9">
          {data.semester2.map((subject, idx) => (
            <Card key={idx} title={subject.title} url={subject.url} />
          ))}
        </div>
      </div>
    </div>
  )
}