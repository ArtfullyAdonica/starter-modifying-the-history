import { useNavigate, useParams } from "react-router-dom";

function UserView({ users }) {
  const navigate = useNavigate();import { useParams } from "react-router-dom";

function UserView({ users, removeUser }) {
  const { userId } = useParams();
  const current = users.find(({ id }) => id === Number(userId)) || {};
  const { id, name = "", email } = current;
  const [first, last] = name.split(" ");

  const manageDeleteUser = () => {
    navigate("/"); //Send to home page.
    removeUser(current.id, users);
  };

  return (
    <div className="px-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item">
            <a href="#">Back</a>
          </li>
          <li className="breadcrumb-item active">{name}</li>
          <li className="breadcrumb-item">
            <a href="#">Forward</a>
          </li>
        </ol>
      </nav>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="align-middle">
            <th scope="row">{id}</th>
            <td>{first}</td>
            <td>{last}</td>
            <td>{email}</td>
            <td>
              <button className="btn btn-link p-0 pb-1" onClick={() => navigate(-1)}>
  Back
</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserView;
