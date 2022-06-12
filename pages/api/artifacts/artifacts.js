export default default function handler(req, res) {
  res.status(200).json({ 
    types: ["number", "set"]
  })
}
