function NamePerson() {
  const names = ["Alice","Bob","Charlie"];
   return (
      <div className="NamePerson">
        <ul>
          {
            names.map((names, i) => (
              <li key={i}>{names}</li>
            )
            )
          }
        </ul>
      </div>
  );
}

export default NamePerson;