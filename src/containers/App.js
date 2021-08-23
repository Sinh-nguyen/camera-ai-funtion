// import './App.scss';
import Header from "./Header/Header";
import SideMenu from "./SideMenu/SideMenu";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <div className="page-header">
        <Header />
      </div>
      <div className="page-content">
        <div className="page-title">
          <span className="text-title">User Management</span>
          <button type="button" className="btn btn-primary">
            <i class="fas fa-plus iconAdd"></i>Add New User
          </button>
          <form className="form-search">
            <input
              className="form-control me-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-light btnSearch" type="submit">
              <i className="fas fa-search iconSearch"></i>
            </button>
          </form>
        </div>
        <div className="tableUser table">
          <table id="customers">
            <tbody>
              <tr>
                <th>DisplayName</th>
                <th>UserName</th>
                <th>Role</th>
                <th>Quantity Camera</th>
                <th>Active</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>dddd</td>
                <td>ssss</td>
                <td>ssss</td>
                <td>ssssss</td>
                <td>fffffff</td>
                <td>
                  <button className="btn-edit-user">
                    <i class="far fa-edit"></i>
                  </button>
                  <button className="btn-delete-user">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>dddd</td>
                <td>ssss</td>
                <td>ssss</td>
                <td>ssssss</td>
                <td>fffffff</td>
                <td>
                  <button className="btn-edit-user">
                    <i class="far fa-edit"></i>
                  </button>
                  <button className="btn-delete-user">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>dddd</td>
                <td>ssss</td>
                <td>ssss</td>
                <td>ssssss</td>
                <td>fffffff</td>
                <td>
                  <button className="btn-edit-user">
                    <i class="far fa-edit"></i>
                  </button>
                  <button className="btn-delete-user">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
