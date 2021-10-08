import React from 'react'

export default function PartEdit() {
  const [formData, setFormData] = useState({
    name: '',
    img_url: '',
    price: '',
    description: '',
    rating: ''
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singlePart = props.parts.find(part => part.id === Number(id))
      setFormData({
        make: singlePart.make,
        model: singlePart.model,
        img_url: singlePart.img_url,
        year: singlePart.year

      });
    }
    if (props.parts.length) {
      prefillFormData();
    }
  }, [props.parts, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handlepartUpdate(id, formData);
      }}
    >
      <h3>Edit part</h3>
      <label>
        Make:
        <input
          type='text'
          name='make'
          value={formData.make}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Model:
        <input
          type='text'
          name='model'
          value={formData.model}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image-URL:
        <input
          type='text'
          name='img_url'
          value={formData.img_url}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Year:
        <input
          type='text'
          name='year'
          value={formData.year}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
