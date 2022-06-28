import "./semantic-ui/components/table.css"

export default function TableTinknet() {
    return (
        <table class="ui celled table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Perangkat</th>
                    <th>Jenis</th>
                    <th>Jumlah</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="id">1</td>
                    <td data-label="nama_perangkat">PC HP Z400 INTEL XEON</td>
                    <td data-label="jenis">PC SERVER</td>
                    <td data-label="jumlah">1</td>
                </tr>
            </tbody>
        </table>
    )
}