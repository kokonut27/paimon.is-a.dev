import { artifacts } from '../data/artifacts'

export default function handler(req, res) {
  const { num, set, sort } = req.query
  const sortTypes = ["rarity", "name"]
  if (set) {
    if (artifacts.AllArtifacts.includes(set)) {
      if (sort && sortTypes.includes(sort)) {
        
      }
      res.status(200).json({
        name: set,
        rarity: artifacts.ArtifactsInfo["rarity"]
      })
    } else {
      res.status(500).json({
        INTERNAL_SERVER_ERROR: {
          error: "Artifact set does not exist!"
        }
      })
    }
  } else if (num) {
    try {
      let data = artifacts.AllArtifacts.slice(0, num)

      if (!data.includes("")) {
        res.status(200).json({
          artifacts: data
        })
      } else {
        res.status(500).json({
          INTERNAL_SERVER_ERROR: {
            error: "The server had trouble showing artifacts count!"
          }
        })
      }
    } catch(err) {
      res.status(500).json({
        INTERNAL_SERVER_ERROR: {
          error: err
        }
      })
    }
  } else {
    res.status(200).json({ 
      types: ["number", "set"]
    })
  }
}
