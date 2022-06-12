import { artifacts } from '/data'

export default function handler(req, res) {
  const { num, set } = req.query
  if (num || set) {
    if (artifacts.AllArtifacts.includes(set)) {
      res.status(200).json({ 
        name: set,
        rarity: artifacts.ArtifactsInfo["rarity"]
      })
    }
  } else {
    res.status(200).json({ 
      types: ["number", "set"]
    })
  }
}
