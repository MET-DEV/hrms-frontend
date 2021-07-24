import React, { useEffect, useState } from "react";
import { Table,Button,Icon,Pagination,Dropdown } from "semantic-ui-react";
import JobAddService from "../services/jobAdService";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavori } from "../store/actions/favoriActions";

export default function JobAd() {
  let [activePage, setActivePage] = useState(1);
  let [pageSize, setPageSize] = useState(10);
  let [totalPageSize, setTotalPageSize] = useState(0);
  const [jobAdds, setJobAdd] = useState([]);
 const dispatch = useDispatch()
 let {cityId}=useParams()
 let {workTypeId}=useParams()
 let {jobPositionId}=useParams()
 

  useEffect(() => {
    let jobAddService = new JobAddService();
   
    let newFilter={
      cityId:cityId,
      workTypeId:workTypeId,
      jobPositionId:jobPositionId
    }
    
   
    jobAddService.getFilterJobAd(activePage,pageSize,newFilter).then((result) => {setJobAdd(result.data.data); setTotalPageSize(parseInt(result.data.message))  })
  }, [activePage,pageSize]);
  const handlePaginationChange = (e, { activePage }) => {
    setActivePage(activePage);
  }
  const handleAddToFavori=(jobAdd)=>{
    dispatch(addToFavori(jobAdd))
  }
  const handlePaginationSizeChange = (value) => {
    setPageSize(value);
  }
  const paginationOptions = [
    
    { key:10, text: "10 İlan", value: 10 },
    { key:25, text: "25 İlan", value: 25 },
    { key:50, text: "50 İlan", value: 50 },
    { key:100, text: "100 İlan", value: 100 },
  ];
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Başlık</Table.HeaderCell>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>

            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Max Maaş</Table.HeaderCell>
            <Table.HeaderCell>Min Maaş</Table.HeaderCell>
            <Table.HeaderCell>Favorilerime Ekle</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdds.map((jobAdd) => (
            
            <Table.Row key={jobAdd.id}>
              <Table.Cell>
                <Link to={`/jobad/${jobAdd.employer&&jobAdd.id}`}>{jobAdd.jobTitle}</Link>
              </Table.Cell>
              <Table.Cell>{jobAdd.employer&&(jobAdd.employer.name).toUpperCase()}</Table.Cell>

              <Table.Cell>{jobAdd.jobPosition && (jobAdd.jobPosition.name).toUpperCase()}</Table.Cell>
              <Table.Cell>{jobAdd.sallaryMax}</Table.Cell>
              <Table.Cell>{jobAdd.sallaryMin}</Table.Cell>
              <Button onClick={()=>handleAddToFavori(jobAdd)} color="teal" icon labelPosition='left'>
                <Icon name='favorite' />
                Favorilerime Ekle
              </Button>
              
              
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div>
      <Pagination
        firstItem={null}
        lastItem={null}
        activePage={activePage}
        onPageChange={handlePaginationChange}
        totalPages={Math.ceil(totalPageSize / pageSize)}
      />

      <Dropdown
          onChange={(e, data) => {
            setActivePage(1)
            setPageSize(data.value);
            handlePaginationSizeChange(data.value);
          }}
          selection
          defaultValue={pageSize}
          text={"Sayfalama - " + pageSize}
          style={{ float: "right" }}
          options={paginationOptions}
      />
      </div>
    </div>
  );
}
