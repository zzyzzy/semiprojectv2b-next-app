import Board from "/models/Board";

export default async (req, res) => {
    let bno = req.query.bno;

    try {
        const rowData = new Board().selectOne(bno).then((bds) => bds);
        res.status(200).json(await rowData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

}








