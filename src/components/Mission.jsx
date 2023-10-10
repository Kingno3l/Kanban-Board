const Mission = () => {
  return (
    <section className="mission-section">
      <table class="table">
        <thead>
          <tr>
            <th className="mission">Mission</th>
            <th className="description">Description</th>
            <th className="status">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="col">Mission name</td>
            <td className="col2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              et deserunt corrupti quae at ut tempora in maiores, a quam autem
              illo officia perferendis, sunt earum, magnam esse doloremque
              praesentium illum excepturi corporis voluptatibus hic optio.
              Fugiat quia doloribus, cupiditate beatae voluptatem, saepe, veniam
              delectus a nisi quisquam deleniti ratione.
            </td>
            <td className="col">status</td>
            <td className="col">
              <button>Join Mission</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Mission;
