import { SchoolSessionView } from '../components/pages/home/TimeTable'
import { FullSchoolSession } from '../models/scholSession.full.model'

export const transformer = (s: FullSchoolSession): SchoolSessionView[] => {
  return s.SchoolTime.map((e) => ({
    time: e,
    sessionType: s.sessionType,
    subject: s.subject,
    id: s.id,
  }))
}

// const times = faltenedData.map((e) => e.time)

// for (let i = 0; i < times.length; i++) {
//   const element = times[i]

//   const startIdArr = await prisma.schoolPeriod.findMany({
//     where: { hour: element.start.hour, minute: element.start.minute },
//   })

//   const endIdArr = await prisma.schoolPeriod.findMany({
//     where: { hour: element.end.hour, minute: element.end.minute },
//   })

//   await prisma.schoolTime.create({
//     data: {
//       week: element.week,
//       group: element.group,
//       day: { connect: { name: element.day } },
//       start: {
//         connectOrCreate: {
//           where: { id: startIdArr.length > 1 ? startIdArr[0].id : -1 },
//           create: {
//             hour: element.start.hour,
//             minute: element.start.minute ?? 0,
//           },
//         },
//       },

//       end: {
//         connectOrCreate: {
//           where: { id: endIdArr.length > 1 ? endIdArr[0].id : -1 },
//           create: { hour: element.end.hour, minute: element.end.minute ?? 0 },
//         },
//       },
//     },
//   })
// }

// const _data: TimeTableData[] = days.map((e) => ({
//   day: e,
//   schoolSessionViews: faltenedData
//     .filter((el) => el.time.day === e)
//     .filter((el) => (el.time.group ? el.time.group === group : true))
//     .filter((el) => (el.time.week ? el.time.week === week : true)),
// }))

// const data = JSON.parse(JSON.stringify(_data))