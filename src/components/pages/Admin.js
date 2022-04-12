//import AdminUserDelete from "./AdminUserDelete";

export default function Admin() {
  return (
    <div class="container">
      <h1 className=" mb-3 text-center text-white fw-bold"></h1>
      <div class="card mb-2">
        <h5 class="card-header bg-success text-light fs-4">Bank Property Details</h5>
        <div class="card-body">
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">Bank Name</th>
                <th scope="col">Property Name</th>
                <th scope="col">Mobile No</th>
                <th scope="col">isActive</th>
                <th scope="col">isApproved</th>
              </tr>
            </thead>
            <tr>
              <td>2</td>
              <td>Sangram</td>
              <td>sangram0@gmail.com</td>
              <td>9975965647</td>
              <td>Yes</td>
              <td>No</td>
              <td>
              <button
                  type="button"
                  class="btn btn-outline-primary my-1 mx-2 btn-sm badge-pill"
                >
                  Approve
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger my-1 mx-2 btn-sm badge-pill"
                >
                  Delete
                </button>
              </td>
            </tr>
           
          </table>
        </div>
      </div>
    </div>
  );
}
