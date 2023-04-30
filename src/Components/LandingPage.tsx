import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function LandingPage({
    defaultZip
}: {
    defaultZip: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;

    const [zip, setZip] = useState<string>("");

    function updateZip(event: ChangeEvent) {
        setZip(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formSearchZip" as={Row}>
                <Form.Label column sm={0}>
                    Enter Zip Code
                </Form.Label>
                <Col>
                    <Form.Control
                        type="text"
                        value={zip}
                        onChange={updateZip}
                    ></Form.Control>
                </Col>
            </Form.Group>
            <div>Your answer: {zip} </div>
        </div>
    );
}
