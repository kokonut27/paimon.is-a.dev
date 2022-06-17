import { bosses } from '../data/bosses';
import dynamicSort from '../utils/sortArray';

export default function handler(req, res) {
  const { num, name, sort, types } = req.query
  let sortTypes = ["difficulty", "name"]

  if (name) {
    if (bosses.ListBosses.includes(name)) {
      var index = bosses.AllBosses.findIndex(function(a) {
        return a.name == set;
      });
      // console.log(index)

      res.status(200).json({
        name: bosses.AllBosses[index].name,
        description: bosses.AllBosses[index].description,
        location: bosses.AllBosses[index].location,
        difficulty: bosses.AllBosses[index].difficulty
      })
    } else {
      res.status(500).json({
        INTERNAL_SERVER_ERROR: {
          error: "No such boss exists!"
        }
      })
    }
  }
}