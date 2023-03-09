import React from "react";
import { Link } from "react-router-dom";

const CurriculumTable = () => {
  return (
    <div className="my-10">
      <div className="mb-10 text-center">
        <h1 className="text-xl font-bold">CURRICULUMS</h1>
      </div>
      <div className="overflow-x-auto curriculum ">
        <table className="w-full max-w-screen-xl mx-auto">
          <tr>
            <th>No</th>
            <th>Year</th>
            <th>Term</th>
            <th>Programme</th>
            <th>Click</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Y-1</td>
            <td>T-1</td>
            <td>Bsc</td>
            <td>
              <Link to="/curriculum/11" className="btn btn-sm btn-info">
                View
              </Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Y-1</td>
            <td>T-2</td>
            <td>Bsc</td>
            <td>
              <Link to="/curriculum/12" className="btn btn-sm btn-info">
                View
              </Link>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Y-2</td>
            <td>T-1</td>
            <td>Bsc</td>
            <td>
              <Link to="/curriculum/21" className="btn btn-sm btn-info">
                View
              </Link>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Y-2</td>
            <td>T-2</td>
            <td>Bsc</td>
            <td>
              <Link to="/curriculum/22" className="btn btn-sm btn-info">
                View
              </Link>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Y-3</td>
            <td>T-1</td>
            <td>Bsc</td>
            <td>
              <Link to="/curriculum/31" className="btn btn-sm btn-info">
                View
              </Link>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Y-3</td>
            <td>T-2</td>
            <td>Bsc</td>
            <td>
              <Link to="/curriculum/32" className="btn btn-sm btn-info">
                View
              </Link>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Y-4</td>
            <td>T-1</td>
            <td>Bsc</td>
            <td>
              <Link to="/curriculum/41" className="btn btn-sm btn-info">
                View
              </Link>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Y-4</td>
            <td>T-2</td>
            <td>Bsc</td>
            <td>
              <Link to="/curriculum/42" className="btn btn-sm btn-info">
                View
              </Link>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Y-5</td>
            <td>T-1</td>
            <td>Msc</td>
            <td>
              <Link to="/curriculum/51" className="btn btn-sm btn-info">
                View
              </Link>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Y-5</td>
            <td>T-2</td>
            <td>Msc</td>
            <td>
              <Link to="/curriculum/52" className="btn btn-sm btn-info">
                View
              </Link>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>Y-6</td>
            <td>T-1</td>
            <td>Msc</td>
            <td>
              <Link to="/curriculum/61" className="btn btn-sm btn-info">
                View
              </Link>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>Y-6</td>
            <td>T-2</td>
            <td>Msc</td>
            <td>
              <Link to="/curriculum/62" className="btn btn-sm btn-info">
                View
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CurriculumTable;
