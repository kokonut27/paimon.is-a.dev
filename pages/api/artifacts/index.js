import { artifacts } from '../data/artifacts'

export default function handler(req, res) {
  const { num, set, sort } = req.query
  const sortTypes = ["rarity", "name"]
  if (set) {
    if (artifacts.AllArtifacts.includes(set)) {
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
    // console.log(sort);
    try {
      let data = artifacts.AllArtifacts.slice(0, num)
      let rarityData = artifacts.AllArtifactsRarity.slice(0, num)

      if (!data.includes("")) {
        if (sort && sortTypes.includes(sort)) {
          if (sort === "name") {
            res.status(200).json({
              artifacts: data.sort()
            })
          } else {
            res.status(200).json({
              artifacts: rarityData.sort()
            })
          }     
        } else if (sort === undefined) {
          res.status(200).json({
            artifacts: artifacts.AllArtifacts
          })
        } else {
          res.status(500).json({
            INTERNAL_SERVER_ERROR: {
              error: "The server had trouble sorting the artifacts!"
            }
          })
        }
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
          error: err.message
        }
      })
    }
  } else {
    res.status(200).json({ 
      types: ["number", "set"]
    })
  }
}
