import React from 'react';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

import { exportHtmlToExcel } from "@hawjeh/js-to-excel";

const JsToExcel = () => {

    const onSubmitClick = () => {
        const table = window.document.getElementById('sample-table');
        exportHtmlToExcel(table);
    }

    return (
        <Styled.JsToExcel>
            <Container section>
                <TitleSection title="HTML - JS Table to Excel" subtitle="@hawjeh/js-to-excel module" center />
                <Styled.Form>
                    <div className="text-left m-5">
                        <table
                            id="sample-table"
                            className="table-auto border border-black-300"
                            data-header="true"
                            data-bordered="false"
                            data-f-name="Calibri"
                            data-f-size="11"
                            data-f-color="FF000000"
                            data-f-bold="false"
                            data-f-italic="false"
                            data-f-strike="false"
                            data-f-underline="false">
                            <thead data-f-bold="true" data-a-vert="middle" data-f-color="FFFF0000">
                                <tr>
                                    <th className="border border-black-300 p-3">Header is</th>
                                    <th className="border border-black-300 p-3">Bold</th>
                                    <th className="border border-black-300 p-3">Align Vert Middle</th>
                                    <th className="border border-black-300 p-3">Red Color</th>
                                    <th className="border border-black-300 p-3" data-ex="true">Excluded</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-black-300 p-3" data-f-size="14">Size 14</td>
                                    <td className="border border-black-300 p-3" data-f-bold="true">Bold</td>
                                    <td className="border border-black-300 p-3" data-f-italic="true">Italic</td>
                                    <td className="border border-black-300 p-3" data-f-strike="true">Strike Through</td>
                                    <td className="border border-black-300 p-3" data-ex="true">Excluded Value</td>
                                </tr>
                                <tr>
                                    <td className="border border-black-300 p-3" data-a-hori="center">Horizontal Center</td>
                                    <td className="border border-black-300 p-3" data-a-vert="bottom">Vertical Bottom</td>
                                    <td className="border border-black-300 p-3" data-a-wrap="true">Wrap Text</td>
                                    <td className="border border-black-300 p-3" data-a-indt="10">Indent 10</td>
                                    <td className="border border-black-300 p-3" data-ex="true">Excluded Value</td>
                                </tr>
                                <tr>
                                    <td className="border border-black-300 p-3" data-a-rtl="true">Right to left</td>
                                    <td className="border border-black-300 p-3" data-a-stf="true">Shrink to fit</td>
                                    <td className="border border-black-300 p-3" data-a-rota="vertical">Vertical Rotate</td>
                                    <td className="border border-black-300 p-3" data-type="n" data-fmt="0.00">12345</td>
                                    <td className="border border-black-300 p-3" data-ex="true">Excluded Value</td>
                                </tr>
                                <tr>
                                    <td className="border border-black-300 p-3" data-type="n">2500</td>
                                    <td className="border border-black-300 p-3" data-type="d">05-23-2018</td>
                                    <td className="border border-black-300 p-3" data-type="b">true</td>
                                    <td className="border border-black-300 p-3" data-type="https://google.com">Google</td>
                                    <td className="border border-black-300 p-3" data-ex="true">Excluded Value</td>
                                </tr>
                                <tr>
                                    <td className="border border-black-300 p-3" data-b-side-all="">Bordered</td>
                                    <td className="border border-black-300 p-3" data-b-side-left="" data-b-side-right="" data-b-style="dotted">Dotted left and right</td>
                                    <td className="border border-black-300 p-3" data-b-side-top="" data-b-style-color="FFFF0000">Top Red Only</td>
                                    <td className="border border-black-300 p-3" data-b-side-bottom="" data-b-style="double">Bottom Double</td>
                                    <td className="border border-black-300 p-3" data-ex="true">Excluded Value</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Button primary onSubmitClick={onSubmitClick}>
                        Export
                    </Button>
                </Styled.Form>
            </Container>
        </Styled.JsToExcel>
    );
};

export default JsToExcel;
