import React from 'react'
import { Login } from './loginPage/Login';
import { Leftbar } from './sidebar/Leftbar';
import { Link } from "react-router-dom";
import Header from './header/Header';
import Footer from './footer/Footer';
import { Table } from "antd";
import { Helmet } from "react-helmet";

function JobListing() {
  const columns = [
    {
      title: "Name of companies",
      dataIndex: "name",
      sorter: (a, b) => a.clientCompId.length - b.clientCompId.length,
    },
    {
      title: "Contact Number",
      dataIndex: "mobileNumber",
      sorter: (a, b) => a.mobileNumber.length - b.mobileNumber.length,
    },

    {
      title: "Email Address",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },

    {
      title: "Company ID",
      dataIndex: "clientCompId",
    },
    {
      title: "Action",
      render: (text, record) => (
        <div>
          <div className="dropdown dropdown-action float-end">
            <a
              href="#"
              className="action-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="material-icons">more_vert</i>
            </a>


            <div className="row dropdown-menu dropdown-menu-right">
              <div className="col-md-12">
                <Link
                  to={{
                    pathname: `/app/client-creation`,
                    state: { record },
                  }}
                >
                  <i /> Edit
                </Link>
              </div>
              <div className="col-md-12">
                <Link
                  to={{
                    pathname: "/app/subscription-history",
                    state: { record },
                  }}
                >
                  <i /> Subscription History
                </Link>
              </div>
              <div className="col-md-12">
                <Link
                  to={{
                    pathname: "/app/job-creation",
                    state: { record },
                  }}
                >
                  <i /> Job Creation
                </Link>
              </div>
              <div className="col-md-12">
                <Link
                  to={{
                    pathname: "/app/edit-agency",
                    state: { record },
                  }}
                >
                  <i /> Subscription Renewal
                </Link>
              </div>

              <div />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Header />
      <div className='grid lg:grid-cols-6'>
        <Leftbar />
        <Helmet>
          <title>Job List - Treklers - Admin</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className='p-8 lg:col-span-5'>
          <div className="col-md-12">
            <div className="table-responsive">
              <div className='p-4'>
                <span className='text-2xl font-bold'>Job List</span>
                <span className="font-bold p-4">Home </span>
              </div>
              <Table
                className="table-striped"
                pagination={{
                  // total: companyList.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  // onShowSizeChange: onShowSizeChange,
                  // itemRender: itemRender,
                }}
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                // dataSource={companyList}
                rowKey={(record) => record.id}
              // onChange={console.log("change")}
              />

            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  )
}

export default JobListing;