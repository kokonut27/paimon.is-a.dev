import { AllArtifacts, ArtifactsInfo } from '.../data/artifacts'

export default function handler(req, res) {
  const { num, set } = req.query
  if AllArtifacts.includes(set) {
    res.status(200).json({ 
      name: set,
      rarity: ArtifactsInfo["rarity"]
    })
}
